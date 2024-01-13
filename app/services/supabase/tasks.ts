import { Task } from "app/models"
import { supabase } from "."
import { logError } from "app/utils/handleNetworkErrors"
import { serializeTask } from "app/utils/serializers/serialize-task"

export const createTask = async (task: Task, userId: string): Promise<Task | null> => {
  try {
    const { data, error } = await supabase
      .from("tasks")
      .insert([
        {
          title: task.title,
          description: task.description,
          date: task.date,
          space: task.space,
          user_id: userId,
        },
      ])
      .select()
      .single()

    if (error) {
      logError(error)
      return null
    }

    return serializeTask(data)
  } catch (error) {
    logError(error)
    return null
  }
}

export async function getTasks(userId: string): Promise<Task[]> {
  try {
    const { data, error } = await supabase
      .from("tasks")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: true })
    if (error) {
      logError(error)
      return []
    }

    return data.map(serializeTask)
  } catch (error) {
    logError(error)
    return []
  }
}

export async function getTasksBySpace(spaceId: string): Promise<Task[]> {
  try {
    const { data, error } = await supabase
      .from("tasks")
      .select("*")
      .eq("space", spaceId)
      .order("created_at", { ascending: true })
    if (error) {
      logError(error)
      return []
    }

    return data.map(serializeTask)
  } catch (error) {
    logError(error)
    return []
  }
}

export async function deleteTask(id: string | number): Promise<void> {
  try {
    const { error } = await supabase.from("tasks").delete().eq("id", id)

    if (error) {
      logError(error)
    }
  } catch (error) {
    logError(error)
  }
}

export async function updateTask(task: Task): Promise<Task | null> {
  try {
    const { data: updatedTask, error } = await supabase
      .from("tasks")
      .update({
        title: task.title,
        description: task.description,
        date: task.date,
        space: task.space,
      })
      .eq("id", task.id)
      .select()
      .single()

    if (error) {
      logError(error)
      return null
    }

    return serializeTask(updatedTask)
  } catch (error) {
    logError(error)
    return null
  }
}

export async function toggleCompletedTask(
  id: string | number,
  value: boolean,
): Promise<Task | null> {
  try {
    const { data: updatedTask, error } = await supabase
      .from("tasks")
      .update({ completed: value })
      .eq("id", id)
      .select()
      .single()

    if (error) {
      logError(error)
      return null
    }

    return serializeTask(updatedTask)
  } catch (error) {
    logError(error)
    return null
  }
}
