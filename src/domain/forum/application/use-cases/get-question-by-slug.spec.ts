import { InMemoryQuestionsRepository } from 'test/repositories/in-memory-questions-repository'
import { GetQuestionBySlug } from './get-question-by-slug'
import { Question } from '@/domain/forum/enterprise/entities/question'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Slug } from '@/domain/forum/enterprise/entities/value-objects/slug'

let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let sut: GetQuestionBySlug

describe('Get Question By Slug Use Case', () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository()
    sut = new GetQuestionBySlug(inMemoryQuestionsRepository)
  })

  it('should be able to get a question by slug', async () => {
    const newQuestion = Question.create({
      title: 'New question',
      slug: Slug.create('new-question'),
      content: 'Hello world',
      authorId: new UniqueEntityID(),
    })

    inMemoryQuestionsRepository.create(newQuestion)

    const { question } = await sut.execute({
      slug: 'new-question',
    })

    expect(question.id).toBeTruthy()
    expect(question.title).toEqual(newQuestion.title)
  })
})
