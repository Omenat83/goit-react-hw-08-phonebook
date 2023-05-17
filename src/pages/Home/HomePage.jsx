import { HomeText, HomeContainer } from './HomePage.styled';

export default function Home() {
  return (
    <HomeContainer>
      <HomeText>
        This application allows you to add, delete, and search for contacts by
        name. To access the functionality, register or sign in with your
        account.
      </HomeText>
    </HomeContainer>
  );
}
