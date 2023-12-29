import { Task } from "app/models"
import React, {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react"

type TaskKeys = Exclude<keyof Task, "id">

interface CreateTaskProps {
  isTaskModalOpen: boolean
  isDatePickerVisible: boolean
  task: Task
  showCreateTaskModal: () => void
  hideCreateTaskModal: () => void
  openDatePicker: () => void
  closeDatePicker: () => void
  updateTask: (key: TaskKeys, value: any) => void
}

export const CreateTaskContext = createContext<CreateTaskProps | undefined>(undefined)

const initialTaskValue: Task = {
  description: "",
  id: 0,
  title: "",
  date: "",
}

export const CreateTaskProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [task, setTask] = useState<Task>(initialTaskValue)
  const [modalState, setModalState] = useState({
    isTaskModalOpen: false,
    isDatePickerOpen: false,
  })

  const showCreateTaskModal = useCallback(
    () => setModalState((prevState) => ({ ...prevState, isTaskModalOpen: true })),
    [],
  )

  const hideCreateTaskModal = useCallback(() => {
    setTask(initialTaskValue)
    setModalState((prevState) => ({ ...prevState, isTaskModalOpen: false }))
  }, [])

  const updateTask = useCallback((key: TaskKeys, value: any) => {
    setTask((prevTask) => ({ ...prevTask, [key]: value }))
  }, [])

  const openDatePicker = useCallback(() => {
    setModalState({ isTaskModalOpen: false, isDatePickerOpen: true })
  }, [])

  const closeDatePicker = useCallback(() => {
    setModalState({ isTaskModalOpen: true, isDatePickerOpen: false })
  }, [])

  const contextValue = useMemo(
    () => ({
      isTaskModalOpen: modalState.isTaskModalOpen,
      isDatePickerVisible: modalState.isDatePickerOpen,
      task,
      showCreateTaskModal,
      hideCreateTaskModal,
      openDatePicker,
      closeDatePicker,
      updateTask,
    }),
    [
      modalState,
      showCreateTaskModal,
      hideCreateTaskModal,
      task,
      updateTask,
      openDatePicker,
      closeDatePicker,
    ],
  )
  return <CreateTaskContext.Provider value={contextValue}>{children}</CreateTaskContext.Provider>
}

export const useCreateTask = (): CreateTaskProps => {
  const context = useContext(CreateTaskContext)
  if (context === undefined) {
    throw new Error("useCreateTask must be used within a AppProviders")
  }
  return context
}
