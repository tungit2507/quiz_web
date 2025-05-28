import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

// Giả lập dữ liệu lịch sử quiz (bạn có thể thay bằng fetch từ API hoặc localStorage)
const mockHistory = [
    {
        id: 1,
        title: "Quiz Toán học",
        date: "2025-05-27 14:30",
        score: 27,
        total: 30,
    },
    {
        id: 2,
        title: "Quiz Lịch sử",
        date: "2025-05-26 09:10",
        score: 22,
        total: 30,
    },
    {
        id: 3,
        title: "Quiz Địa lý",
        date: "2025-05-25 16:45",
        score: 18,
        total: 30,
    },
];

function HistoryQuiz() {
    const [history, setHistory] = useState([]);
    const navigate = useNavigate(); // Thêm dòng này

    useEffect(() => {
        setHistory(mockHistory);
    }, []);

    return (
        <div className="max-w-3xl mx-auto py-8 px-4">
            <Card>
                <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-6 text-center">Lịch Sử Làm Quiz</h2>
                    {history.length === 0 ? (
                        <p className="text-center text-gray-500">Chưa có lịch sử làm quiz.</p>
                    ) : (
                        <table className="w-full text-left border">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="py-2 px-3 border">#</th>
                                    <th className="py-2 px-3 border">Tên Quiz</th>
                                    <th className="py-2 px-3 border">Ngày làm</th>
                                    <th className="py-2 px-3 border">Kết quả</th>
                                    <th className="py-2 px-3 border"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {history.map((item, idx) => (
                                    <tr key={item.id} className="hover:bg-gray-50">
                                        <td className="py-2 px-3 border">{idx + 1}</td>
                                        <td className="py-2 px-3 border">{item.title}</td>
                                        <td className="py-2 px-3 border">{item.date}</td>
                                        <td className="py-2 px-3 border">
                                            <span className="font-semibold text-blue-700">{item.score}/{item.total}</span>
                                        </td>
                                        <td className="py-2 px-3 border">
                                            <Button
                                                size="sm"
                                                variant="outline"
                                                onClick={() => navigate("/quiz-history-detail", { state: { quiz: item } })}
                                            >
                                                Xem chi tiết
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}

export default HistoryQuiz;