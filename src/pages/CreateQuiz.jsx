import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

function CreateQuiz() {
    const [title, setTitle] = useState("");
    const [questions, setQuestions] = useState([
        { question: "", options: ["", ""], correct: 0 }
    ]);

    const handleQuestionChange = (idx, value) => {
        const updated = [...questions];
        updated[idx].question = value;
        setQuestions(updated);
    };

    const handleOptionChange = (qIdx, oIdx, value) => {
        const updated = [...questions];
        updated[qIdx].options[oIdx] = value;
        setQuestions(updated);
    };

    const handleCorrectChange = (qIdx, value) => {
        const updated = [...questions];
        updated[qIdx].correct = Number(value);
        setQuestions(updated);
    };

    const addOption = (qIdx) => {
        const updated = [...questions];
        updated[qIdx].options.push("");
        setQuestions(updated);
    };

    const addQuestion = () => {
        setQuestions([...questions, { question: "", options: ["", ""], correct: 0 }]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Xử lý lưu quiz ở đây
        alert("Quiz đã được tạo!\n" + JSON.stringify({ title, questions }, null, 2));
    };

    return (
        <div className="max-w-3xl mx-auto py-8 px-4">
            <Card>
                <CardContent className="p-6 space-y-6">
                    <h2 className="text-2xl font-bold mb-4">Tạo Quiz Mới</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block font-medium mb-1">Tiêu đề Quiz</label>
                            <Input
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                                placeholder="Nhập tiêu đề quiz"
                                required
                            />
                        </div>
                        {questions.map((q, qIdx) => (
                            <div key={qIdx} className="border rounded p-4 mb-4 space-y-3 bg-gray-50">
                                <label className="font-semibold">Câu hỏi {qIdx + 1}</label>
                                <Input
                                    value={q.question}
                                    onChange={e => handleQuestionChange(qIdx, e.target.value)}
                                    placeholder="Nhập nội dung câu hỏi"
                                    required
                                />
                                <div className="space-y-2">
                                    <label className="block font-medium">Đáp án</label>
                                    <RadioGroup
                                        value={q.correct.toString()}
                                        onValueChange={val => handleCorrectChange(qIdx, val)}
                                    >
                                        {q.options.map((opt, oIdx) => (
                                            <div key={oIdx} className="flex items-center space-x-2">
                                                <RadioGroupItem value={oIdx.toString()} id={`q${qIdx}-opt${oIdx}`} />
                                                <Input
                                                    value={opt}
                                                    onChange={e => handleOptionChange(qIdx, oIdx, e.target.value)}
                                                    placeholder={`Đáp án ${String.fromCharCode(65 + oIdx)}`}
                                                    required
                                                    className="w-64"
                                                />
                                            </div>
                                        ))}
                                    </RadioGroup>
                                    <Button type="button" variant="outline" onClick={() => addOption(qIdx)}>
                                        Thêm đáp án
                                    </Button>
                                </div>
                            </div>
                        ))}
                        <Button type="button" onClick={addQuestion}>
                            Thêm câu hỏi
                        </Button>
                        <Button type="submit" className="ml-4">
                            Lưu Quiz
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}

export default CreateQuiz;