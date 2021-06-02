import { TagsList, Tag } from './TagsStyles';

type TagsProps = {
  tags: string[];
};

const addComaToEachTag = (tags: string[]) =>
  tags.map((tag, index, array) => {
    const isLastTag = index + 1 === array.length;
    if (isLastTag) return tag;
    const tagWithComma = `${tag},`;
    return tagWithComma;
  });

const Tags = ({ tags }: TagsProps) => {
  const commaSeparatedTags = addComaToEachTag(tags);

  return (
    <TagsList>
      {commaSeparatedTags.map(tag => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </TagsList>
  );
};

export default Tags;
