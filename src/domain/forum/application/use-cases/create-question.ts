import { Either, right } from '@/core/either'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { QuestionsRepository } from '@/domain/forum/application/repositories/question-repository'
import { Question } from '@/domain/forum/enterprise/entities/question'

interface CreateQuestionUseCaseRequest {
  authorId: string
  title: string
  content: string
}

type CreateQuestionUseCaseResponse = Either<null, { question: Question }>

export class CreateQuestionUseCase {
  constructor(private questionsRepository: QuestionsRepository) {}

  async execute({
    authorId,
    title,
    content,
  }: CreateQuestionUseCaseRequest): Promise<CreateQuestionUseCaseResponse> {
    const question = Question.create({
      title,
      content,
      authorId: new UniqueEntityID(authorId),
    })

    await this.questionsRepository.create(question)

    return right({ question })
  }
}
