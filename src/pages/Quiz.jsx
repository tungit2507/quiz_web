import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

const questions = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    question: `Câu hỏi ${i + 1}: Đây là một câu hỏi ví dụ?`,
    options: ["Đáp án A", "Đáp án B", "Đáp án C", "Đáp án D", "Đáp án D", "Đáp án D", "Đáp án D", "Đáp án D"],
    correctAnswer: "Đáp án A",
}));

function Quiz() {
    const [current, setCurrent] = useState(0);
    const [answers, setAnswers] = useState(Array(30).fill(""));
    const [submitted, setSubmitted] = useState(false);

    const handleSelect = (value) => {
        const updatedAnswers = [...answers];
        updatedAnswers[current] = value;
        setAnswers(updatedAnswers);
    };

    const handleNext = () => {
        if (current < questions.length - 1) {
            setCurrent(current + 1);
        }
    };

    const handlePrev = () => {
        if (current > 0) {
            setCurrent(current - 1);
        }
    };

    const handleSubmit = () => {
        setSubmitted(true);
    };

    const score = answers.reduce((total, answer, i) => {
        return answer === questions[i].correctAnswer ? total + 1 : total;
    }, 0);

    return (
        <div className="max-w-2xl mx-auto py-8 px-4">
            <Card>
                <CardContent className="p-6 space-y-4">

                    <h2 className="text-xl font-semibold">
                        {questions[current].question}
                    </h2>

                    <RadioGroup
                        value={answers[current]}
                        onValueChange={handleSelect}
                        className="space-y-2"
                    >
                        {questions[current].options.map((option, index) => (
                            <div key={index} className="flex items-center space-x-2">
                                <RadioGroupItem value={option} id={`q${current}-opt${index}`} />
                                <label
                                    htmlFor={`q${current}-opt${index}`}
                                    className={cn(
                                        "cursor-pointer",
                                        submitted &&
                                        option === questions[current].correctAnswer &&
                                        "text-green-600 font-bold"
                                    )}
                                >
                                    {option}
                                </label>
                            </div>
                        ))}
                    </RadioGroup>

                    <div className="flex justify-between pt-4">
                        <Button onClick={handlePrev} disabled={current === 0}>
                            Trước
                        </Button>
                        {current < questions.length - 1 ? (
                            <Button onClick={handleNext}>Tiếp</Button>
                        ) : (
                            <Button onClick={handleSubmit}>Nộp bài</Button>
                        )}
                    </div>

                    {submitted && current === questions.length - 1 && (
                        <p className="text-lg text-center text-blue-600 font-medium">
                            Bạn đã trả lời đúng {score}/30 câu!
                        </p>
                    )}
                    {/*                 Thanh Chuyển Nhanh */}
                    <div className="flex flex-wrap gap-2 justify-center pb-4">
                        {questions.map((q, idx) => {
                            const answered = answers[idx] !== "";
                            return (
                                <button
                                    key={q.id}
                                    onClick={() => setCurrent(idx)}
                                    className={cn(
                                        "w-8 h-8 rounded-full flex items-center justify-center border text-sm font-medium transition relative",
                                        current === idx
                                            ? "bg-blue-600 text-white border-blue-600"
                                            : answered
                                                ? "bg-green-100 text-green-700 border-green-400 font-bold"
                                                : "bg-white text-gray-700 border-gray-300 hover:bg-blue-100"
                                    )}
                                    aria-label={`Chuyển đến câu ${q.id}`}
                                >
                                    {q.id}
                                    {answered && (
                                        <span className="absolute -top-1 -right-1 text-green-500 text-xs">✔</span>
                                    )}
                                </button>
                            );
                        })}
                    </div>
                    <div className="flex justify-between pt-4">
                        <Button onClick={handlePrev} disabled={current === 0}>
                            Trước
                        </Button>
                        <div className="flex gap-2">
                            {current < questions.length - 1 ? (
                                <Button onClick={handleNext}>Tiếp</Button>
                            ) : (
                                <Button onClick={handleSubmit}>Nộp bài</Button>
                            )}
                            <Button
                                variant="outline"
                                onClick={handleSubmit}
                                disabled={submitted}
                            >
                                Finish
                            </Button>
                        </div>
                    </div>
                </CardContent>

            </Card>
        </div>
    );
}

export default Quiz;
