import { Task } from "app/models"
import React, {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react"
import { Keyboard } from "react-native"

type TaskKeys = Exclude<keyof Task, "id">

interface CreateTaskProps {
  isTaskModalOpen: boolean
  isDatePickerVisible: boolean
  isSpacePickerVisible: boolean
  task: Task
  showCreateTaskModal: () => void
  hideCreateTaskModal: () => void
  openDatePicker: () => void
  openSpacePicker: () => void
  closeDatePicker: () => void
  closeSpacePicker: () => void
  updateTask: (key: TaskKeys, value: any) => void
}

export const CreateTaskContext = createContext<CreateTaskProps | undefined>(undefined)

const initialTaskValue: Task = {
  description: "",
  id: 0,
  title: "",
  date: new Date().toISOString(),
  space: null,
}

export const CreateTaskProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [task, setTask] = useState<Task>(initialTaskValue)
  const [modalState, setModalState] = useState({
    isTaskModalOpen: false,
    isDatePickerOpen: false,
    isSpacePickerOpen: false,
  })

  const showCreateTaskModal = useCallback(
    () => setModalState((prevState) => ({ ...prevState, isTaskModalOpen: true })),
    [],
  )

  const hideCreateTaskModal = useCallback(async () => {
    setTask(initialTaskValue)
    setModalState((prevState) => ({ ...prevState, isTaskModalOpen: false }))
  }, [])

  const updateTask = useCallback((key: TaskKeys, value: any) => {
    setTask((prevTask) => ({ ...prevTask, [key]: value }))
  }, [])

  const openDatePicker = useCallback(() => {
    Keyboard.dismiss()
    setModalState((prevState) => ({ ...prevState, isTaskModalOpen: false, isDatePickerOpen: true }))
  }, [])

  const closeDatePicker = useCallback(() => {
    setModalState((prevState) => ({
      ...prevState,
      isTaskModalOpen: true,
      isDatePickerOpen: false,
    }))
  }, [])

  const openSpacePicker = useCallback(() => {
    Keyboard.dismiss()
    setModalState((prevState) => ({
      ...prevState,
      isTaskModalOpen: false,
      isSpacePickerOpen: true,
    }))
  }, [])

  const closeSpacePicker = useCallback(() => {
    setModalState((prevState) => ({
      ...prevState,
      isTaskModalOpen: true,
      isSpacePickerOpen: false,
    }))
  }, [])

  const contextValue = useMemo(
    () => ({
      isTaskModalOpen: modalState.isTaskModalOpen,
      isDatePickerVisible: modalState.isDatePickerOpen,
      isSpacePickerVisible: modalState.isSpacePickerOpen,
      task,
      showCreateTaskModal,
      hideCreateTaskModal,
      openDatePicker,
      closeDatePicker,
      openSpacePicker,
      closeSpacePicker,
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
      openSpacePicker,
      closeSpacePicker,
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
