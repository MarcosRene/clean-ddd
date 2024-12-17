import { AnswerQuestionUseCase } from './answer-question'
import { InMemoryAnswersRepository } from 'test/repositories/in-memory-answers-repository'

let inMemoryAnswersRepository: InMemoryAnswersRepository
let sut: AnswerQuestionUseCase

describe('Answer Question Use Case', () => {
  beforeEach(() => {
    inMemoryAnswersRepository = new InMemoryAnswersRepository()
    sut = new AnswerQuestionUseCase(inMemoryAnswersRepository)
  })

  it('should be able to create a question', async () => {
    const { answer } = await sut.execute({
      instructorId: '123',
      questionId: '456',
      content: 'Hello world',
    })

    expect(answer.content).toEqual('Hello world')
    expect(inMemoryAnswersRepository.answers[0].id).toEqual(answer.id)
  })
})
