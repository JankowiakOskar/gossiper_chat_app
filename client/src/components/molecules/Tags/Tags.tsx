import { TagsList, Tag } from './TagsStyles';

type TagsProps = {
  tags: string[];
};

const Tags = ({ tags }: TagsProps) => (
  <TagsList>
    {tags.map(tag => (
      <Tag key={tag}>{tag}</Tag>
    ))}
  </TagsList>
);

export default Tags;
