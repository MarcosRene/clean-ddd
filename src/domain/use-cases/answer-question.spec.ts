import { expect, test } from "vitest";
import { AnswerQuestionUseCase } from "./answer-question";

test("create an answer", () => {
  const useCase = new AnswerQuestionUseCase();

  const answer = useCase.execute({
    instructorId: "123",
    questionId: "456",
    content: "Hello world",
  });

  expect(answer.content).toEqual("Hello world");
});
