import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

function QuizHistoryDetail() {
    const navigate = useNavigate();
    const location = useLocation();
    const { quiz = {} } = location.state || {};

    if (!quiz || !quiz.title) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Card>
                    <CardContent className="p-6">
                        <p className="text-center text-red-500">Không tìm thấy dữ liệu chi tiết quiz.</p>
                        <div className="flex justify-center mt-4">
                            <Button onClick={() => navigate(-1)}>Quay lại</Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <Card className="w-full max-w-xl">
                <CardContent className="p-6 space-y-4">
                    <h2 className="text-2xl font-bold text-center mb-2">{quiz.title}</h2>
                    <div className="text-center text-gray-600 mb-2">Ngày làm: {quiz.date}</div>
                    <div className="text-center text-blue-700 font-semibold mb-4">
                        Kết quả: {quiz.score}/{quiz.total}
                    </div>
                    {quiz.questions && quiz.questions.length > 0 && (
                        <div className="max-h-[350px] overflow-y-auto space-y-4">
                            {quiz.questions.map((q, idx) => (
                                <div key={idx} className="border rounded p-3 bg-gray-50">
                                    <div className="font-semibold mb-1">Câu {idx + 1}: {q.question}</div>
                                    <div className="ml-2 mb-1 font-medium">Các đáp án:</div>
                                    <div className="space-y-1 ml-2">
                                        {q.options.map((opt, oIdx) => {
                                            const isSelected = q.userAnswer === opt;
                                            const isCorrect = q.correctAnswer === opt;
                                            const isRightChoice = isSelected && isCorrect;
                                            const isWrongChoice = isSelected && !isCorrect;
                                            return (
                                                <div
                                                    key={oIdx}
                                                    className={
                                                        "px-2 py-1 rounded " +
                                                        (isRightChoice
                                                            ? "bg-green-100 text-green-700 font-bold"
                                                            : isWrongChoice
                                                                ? "bg-red-100 text-red-600 font-bold"
                                                                : isCorrect
                                                                    ? "bg-green-50 text-green-700"
                                                                    : "text-gray-700"
                                                        )
                                                    }
                                                >
                                                    {opt}
                                                    {isRightChoice && <span className="ml-2">✔</span>}
                                                    {isWrongChoice && <span className="ml-2">✖</span>}
                                                    {!isSelected && isCorrect && !isRightChoice && <span className="ml-2">✔</span>}
                                                </div>
                                            );
                                        })}
                                    </div>
                                    <div className="mt-1">
                                        <span className="mr-2">Đáp án của bạn:</span>
                                        <span className={
                                            q.userAnswer === q.correctAnswer
                                                ? "text-green-600 font-bold"
                                                : "text-red-600 font-bold"
                                        }>
                                            {q.userAnswer || "Chưa chọn"}
                                        </span>
                                    </div>
                                    <div>
                                        <span className="mr-2">Đáp án đúng:</span>
                                        <span className="text-green-700 font-bold">{q.correctAnswer}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    <div className="flex justify-center mt-4">
                        <Button onClick={() => navigate(-1)}>Quay lại</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default QuizHistoryDetail;