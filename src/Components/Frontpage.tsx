import { Container, Title, Text, Button, Group, Stack, Grid, Box, Paper } from "@mantine/core";
import { GitHubLogoIcon, PersonIcon } from "@radix-ui/react-icons";
import classes from './hero3.module.css';
import './Frontpage.css';

const FrontPage = () => {

    return (
        <Box>
            <Container size="xl" py={250}>
                <Grid gutter={1} align="center">
                    <Grid.Col span={{ base: 12, md: 7 }}>
                        <Stack gap="xl">
                          

                            <Title maw={500} className={classes?.title} order={1} size="h1">
                                AudioStats - view your spotify listening data
                            </Title>

                            <Text size="xl" c="dimmed" maw={600}>
                                Sign up and view detailed insights based on your Spotify listening habits. Experience this 
                            </Text>

                            <Group mt="xl">
                                <Button size="xl" leftSection={<PersonIcon />} color="var(--mantine-primary-color-filled)">
                                    Sign up
                                </Button>
                                <Button size="xl" variant="default" leftSection={<GitHubLogoIcon />}>
                                    View Github Repo
                                </Button>
                            </Group>
                        </Stack>
                    </Grid.Col>

                    <Grid.Col span={{ base: 12, md: 5 }}>
                        <Paper
                            mih={320}
                            radius="md"
                            p="xl"
                            bg={"rgba(255, 255, 255, 0.1)"}
                            bd={" 1px solid rgba(255, 255, 255, 0.1) "}
                        ></Paper>
                    </Grid.Col>
                </Grid>
            </Container>
        </Box>
    );
};

export default FrontPage;