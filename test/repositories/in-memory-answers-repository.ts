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
