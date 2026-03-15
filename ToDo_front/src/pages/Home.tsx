import { Container, Title, Text, Button, Stack, Group } from '@mantine/core'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <Container size="md" h="100vh" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <Stack align="center" gap="xl">
        <Title order={1} style={{ fontSize: '3rem' }} fw={900} ta="center" className='uppercase'>
          Gestiona tus tareas con <Text span c="blue" inherit>Eficacia</Text>
        </Title>
        
        <Text c="dimmed" size="xl" ta="center" maw={600}>
          Bienvenido a tu nueva aplicación de lista de tareas. Organiza tu día a día, 
          cumple tus objetivos y no olvides nada importante.
        </Text>

        <Group mt="lg">
          <Button 
            component={Link} 
            to="/todos" 
            size="xl" 
            radius="md"
          >
            Ver mis Tareas
          </Button>
        </Group>
      </Stack>
    </Container>
  )
}
