import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { useRepository, useRepositoryContents } from '@/hooks/useRepository';
import { useParams, useSearch } from '@tanstack/react-router';
import { BookOpen, Code, GitBranch, GitFork, Star } from 'lucide-react';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const RepoDetailPage: React.FC = () => {
  const { repo } = useSearch({ from: '/$org/' });
  const { org } = useParams({ from: '/$org/' });
  const { data, isLoading } = useRepository({
    org,
    repo,
  });
  const { data: contents } = useRepositoryContents({
    org,
    repo,
    path: 'README.md',
  });
  if (isLoading || !data) return <Skeleton className="h-full w-full" />;
  return (
    <div className="border rounded-lg px-8 py-4 flex flex-col gap-2 w-full text-wrap justify-between">
      <div className="grid grid-cols-12 gap-2 items-center">
        <div className="col-span-8 flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <h3 className="text-2xl font-bold tracking-tighter leading-3">
              {data.name}
            </h3>
            <Badge variant="outline" className="rounded-full py-0 h-fit">
              {data.private ? 'Private' : 'Public'}
            </Badge>
          </div>
          <p className=" text-muted-foreground">{data.description}</p>

          <div className="flex flex-wrap gap-2">
            {data.topics.map((topic) => (
              <Badge variant="outline" className="rounded-full py-0 w-fit">
                {topic}
              </Badge>
            ))}
          </div>
        </div>
        <div className="col-span-4 flex flex-col gap-1 text-sm  col-start-10">
          <p className=" text-muted-foreground flex items-center gap-2">
            <Star className="size-4" />
            {data.stargazers_count} stars
          </p>
          <p className=" text-muted-foreground flex items-center gap-2">
            <GitFork className="size-4" />
            {data.forks_count} forks
          </p>
          <p className=" text-muted-foreground flex items-center gap-2">
            <BookOpen className="size-4" />
            {data.license?.name}
          </p>
          <p className=" text-muted-foreground flex items-center gap-2">
            <GitBranch className="size-4" />
            {data.default_branch}
          </p>
          <p className=" text-muted-foreground flex items-center gap-2">
            <Code className="size-4" />
            {data.language}
          </p>
        </div>
      </div>
      {contents && (
        <>
          <hr className="my-4 border-border" />
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              img: ({ src, alt }) => {
                if (!src) return null;
                if (src.startsWith('http')) {
                  return <img src={src} alt={alt} />;
                }
                return (
                  <img
                    src={`https://github.com/${org}/${repo}/raw/main/${src}`}
                    alt={alt}
                  />
                );
              },
            }}
            className="markdown-content"
          >
            {atob(contents.content)}
          </ReactMarkdown>
        </>
      )}
    </div>
  );
};

export default RepoDetailPage;
