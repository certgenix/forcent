import ExperienceAI from '../ExperienceAI';

export default function ExperienceAIExample() {
  return (
    <ExperienceAI onOpenChat={() => console.log('Chat opened')} />
  );
}
