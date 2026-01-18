import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { ITeamMember } from '@/types';

interface ITeamBlockProps {
  data: {
    members: ITeamMember[];
  };
  translations: Record<string, string>;
}

export function TeamBlock({ data, translations }: ITeamBlockProps) {
  const { members } = data;

  return (
    <Section background="white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map((member, index) => (
          <Card
            key={member.id}
            hover
            padding="lg"
            className="text-center"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="w-32 h-32 bg-muted dark:bg-[#1a1a1a] rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2 dark:text-white">
              {member.name}
            </h3>
            <p className="text-primary mb-4 dark:text-primary-500">{member.role}</p>
            <p className="text-muted-foreground dark:text-[#a3a3a3]">
              {member.bio}
            </p>
            {(member.socialLinks.linkedin ||
              member.socialLinks.twitter ||
              member.socialLinks.github) && (
              <div className="flex justify-center gap-4 mt-4">
                {member.socialLinks.linkedin && (
                  <a
                    href={member.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-400 dark:text-primary-500"
                  >
                    LinkedIn
                  </a>
                )}
                {member.socialLinks.twitter && (
                  <a
                    href={member.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-400 dark:text-primary-500"
                  >
                    Twitter
                  </a>
                )}
                {member.socialLinks.github && (
                  <a
                    href={member.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-400 dark:text-primary-500"
                  >
                    GitHub
                  </a>
                )}
              </div>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
}
