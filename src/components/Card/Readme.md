### Card variations

```js
import Box from '../Box';
import Button from '../Button';
import Text from '../Text';
import profilePicture from '../../assets/profilePicture.png';

<Card variant='border' p={4}>
  <Card.Main>
    <Card.Image src={profilePicture} alt='profile' />
    <Card.Content ml={3} flex={1}>
      <Text as='h4' fontSize={1} mb={2}>
        This is a card header
      </Text>
      <Text as='p' fontSize={0}>
        This is a card description
      </Text>
    </Card.Content>
    <Card.Action alignItems='center'>
      <Button variant='primary' size='small' p={2}>
        Download
      </Button>
    </Card.Action>
    {/* TODO: <Card.Note /> */}
  </Card.Main>
</Card>;
```
