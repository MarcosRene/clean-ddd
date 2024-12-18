import { PaginationParams } from '@/core/repositories/pagination-params'
import { AnswersRepository } from '@/domain/forum/application/repositories/answer-repository'
import { Answer } from '@/domain/forum/enterprise/entities/answer'

export class InMemoryAnswersRepository implements AnswersRepository {
  public answers: Answer[] = []

  async findById(id: string) {
    const answer = this.answers.find((item) => item.id.toString() === id)

    if (!answer) {
      return null
    }

    return answer
  }

  async findManyByQuestionId(questionId: string, { page }: PaginationParams) {
    const answers = this.answers
      .filter((item) => item.questionId.toString() === questionId)
      .slice((page - 1) * 20, page * 20)
    return answers
  }

  async save(question: Answer) {
    const itemIndex = this.answers.findIndex((item) => item.id === question.id)

    this.answers[itemIndex] = question
  }

  async create(answer: Answer) {
    this.answers.push(answer)
  }

  async delete(answer: Answer) {
    const itemIndex = this.answers.findIndex((item) => item.id === answer.id)

    if (itemIndex === -1) {
      return
    }

    this.answers.splice(itemIndex, 1)
  }
}
