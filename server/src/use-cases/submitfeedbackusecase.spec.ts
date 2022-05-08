import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

describe('Submit feedback', () => {
    it('should be able to submit feedback', async () => {
        const submitFeedback = new SubmitFeedbackUseCase(
            {create: async () => {}},
            {sendMail: async () => {}}
        )
    await expect(submitFeedback.execute({
        type: 'BUG',
        comment: 'comentario',
        screenshot: 'teste.png',
    })).resolves.not.toThrow();
    });
});