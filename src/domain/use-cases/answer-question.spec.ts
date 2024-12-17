import { AnswerQuestionUseCase } from './answer-question'
import { AnswerRepository } from '../repositories/answer-repository'
import { Answer } from '../entities/answer'

const fakeAnswerRepository: AnswerRepository = {
  create: async (answer: Answer) => {
    return answer
  },
}

test('create an answer', async () => {
  const useCase = new AnswerQuestionUseCase(fakeAnswerRepository)

  const answer = await useCase.execute({
    instructorId: '123',
    questionId: '456',
    content: 'Hello world',
  })

  expect(answer.content).toEqual('Hello world')
})
