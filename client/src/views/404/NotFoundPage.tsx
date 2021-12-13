import Button from 'components/atoms/Button/ButtonStyles';
import CustomLink from 'components/atoms/CustomLink/CustomLink';
import { Color } from 'utils/types/enums';
import { Routes } from 'routes';
import { Wrapper, ContentWrapper, Paragraph, Image404 } from './NotFoundStyles';

const NotFoundPage = () => (
  <Wrapper>
    <ContentWrapper>
      <Image404 />

      <Paragraph>Ohh..it&apos;s looks like you&apos;ve lost. We couldn&apos;t find page what you were looking for...</Paragraph>

      <CustomLink to={Routes.Home}>
        <Button color={Color.LightBlue}>Get back</Button>
      </CustomLink>
    </ContentWrapper>
  </Wrapper>
);

export default NotFoundPage;
