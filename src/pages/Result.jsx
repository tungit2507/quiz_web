import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

function Result() {
    const navigate = useNavigate();
    const location = useLocation();
    // Nhận dữ liệu kết quả từ location.state (nếu có)
    const { score = 0, total = 0, answers = [], questions = [] } = location.state || {};

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <Card className="w-full max-w-2xl">
                <CardContent className="p-6 space-y-6">
                    <h2 className="text-2xl font-bold text-center mb-2">Kết Quả Bài Làm</h2>
                    <p className="text-lg text-center text-blue-600 font-medium mb-4">
                        Bạn đã trả lời đúng <span className="font-bold">{score}</span>/{total} câu!
                    </p>
                    <div className="max-h-[400px] overflow-y-auto space-y-4">
                        {questions.length > 0 && questions.map((q, idx) => (
                            <div key={idx} className="border rounded p-3 bg-gray-50">
                                <div className="font-semibold mb-1">Câu {idx + 1}: {q.question}</div>
                                <div>
                                    <span className="mr-2">Đáp án của bạn:</span>
                                    <span className={
                                        answers[idx] === q.correctAnswer
                                            ? "text-green-600 font-bold"
                                            : "text-red-600 font-bold"
                                    }>
                                        {answers[idx] || "Chưa chọn"}
                                    </span>
                                </div>
                                <div>
                                    <span className="mr-2">Đáp án đúng:</span>
                                    <span className="text-green-700 font-bold">{q.correctAnswer}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-4">
                        <Button onClick={() => navigate("/")}>Về trang chủ</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default Result;