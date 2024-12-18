import { AnswersRepository } from '@/domain/forum/application/repositories/answer-repository'
import { Answer } from '@/domain/forum/enterprise/entities/answer'

interface EditAnswerUseCaseRequest {
  authorId: string
  questionId: string
  content: string
}

interface EditAnswerUseCaseResponse {
  answer: Answer
}

export class EditAnswerUseCase {
  constructor(private answerRepository: AnswersRepository) {}

  async execute({
    authorId,
    questionId,
    content,
  }: EditAnswerUseCaseRequest): Promise<EditAnswerUseCaseResponse> {
    const answer = await this.answerRepository.findById(questionId)

    if (!answer) {
      throw new Error(`Question not found.`)
    }

    if (authorId !== answer.authorId.toString()) {
      throw new Error('You are not the author of this question.')
    }

    answer.content = content

    await this.answerRepository.save(answer)

    return { answer }
  }
}
