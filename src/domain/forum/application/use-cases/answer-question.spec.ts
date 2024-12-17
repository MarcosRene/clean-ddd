import { AnswerQuestionUseCase } from './answer-question'
import { AnswerRepository } from '@/domain/forum/application/repositories/answer-repository'
import { Answer } from '@/domain/forum/enterprise/entities/answer'

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
