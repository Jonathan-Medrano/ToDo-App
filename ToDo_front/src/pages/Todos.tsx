import { useState } from 'react';
import { Container, Title, Text, Button, Stack, Group, TextInput, Checkbox, Card, Flex, ActionIcon } from '@mantine/core';
import { Link } from 'react-router-dom';
import { IconCalendar, IconArrowRight } from '@tabler/icons-react';

interface Task {
  id: string;
  name: string;
  completed: boolean;
}

const initialTasks: Task[] = [
  { id: '1', name: 'Comprar víveres', completed: false },
  { id: '2', name: 'Terminar informe mensual', completed: true },
  { id: '3', name: 'Llamar al dentista', completed: false },
  { id: '4', name: 'Planificar viaje de fin de semana', completed: false },
];

export default function Todos() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [newTaskName, setNewTaskName] = useState('');

  const handleAddTask = () => {
    if (newTaskName.trim()) {
      const newTask: Task = {
        id: String(tasks.length + 1), // Generación simple de ID para datos ficticios
        name: newTaskName.trim(),
        completed: false,
      };
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTaskName('');
    }
  };

  const handleToggleComplete = (id: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <Container size="md" py="xl">
      <Stack gap="xl">
        <Group justify="space-between" align="center">
          <Title order={1}>Mis Tareas</Title>
          <Button 
            variant="outline" 
            leftSection={<IconCalendar size={18} />}
            // component={Link} to="/calendar" // Descomentar si tienes una ruta /calendar
          >
            Ir al Calendario
          </Button>
        </Group>

        {/* Formulario para nueva tarea */}
        <Card withBorder shadow="sm" p="lg">
          <Stack>
            <Title order={3}>Nueva Tarea</Title>
            <Group>
              <TextInput
                placeholder="Escribe el nombre de la tarea"
                value={newTaskName}
                onChange={(event) => setNewTaskName(event.currentTarget.value)}
                style={{ flexGrow: 1 }}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    handleAddTask();
                  }
                }}
              />
              <Button onClick={handleAddTask}>Agregar Tarea</Button>
            </Group>
          </Stack>
        </Card>

        {/* Lista de tareas */}
        <Stack gap="md">
          {tasks.length === 0 ? (
            <Text c="dimmed" ta="center">No hay tareas pendientes. ¡Añade una!</Text>
          ) : (
            tasks.map((task) => (
              <Card key={task.id} withBorder shadow="xs" p="md">
                <Flex align="center" justify="space-between">
                  <Group gap="sm">
                    <Checkbox
                      checked={task.completed}
                      onChange={() => handleToggleComplete(task.id)}
                      size="md"
                    />
                    <Text 
                      style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                      fw={500}
                    >
                      {task.name}
                    </Text>
                  </Group>
                  <ActionIcon 
                    variant="subtle" 
                    color="gray" 
                    component={Link} 
                    to={`/todos/${task.id}`}
                    aria-label={`Ver detalles de ${task.name}`}
                  >
                    <IconArrowRight size={20} />
                  </ActionIcon>
                </Flex>
              </Card>
            ))
          )}
        </Stack>
      </Stack>
    </Container>
  );
}
