 export const addTask = () => {
    return {
        type: ADD_TO_TASK
    };
};

export const listTask = () => {
    return {
        type: LIST_TO_TASK
    };
};

export const removeTask = () => {
    return {
        type: REMOVE_TASK
    };
};

export const checkTask = () => {
    return {
        type: CHECK_TASK
    };
};

export const checkAllTasks = () => {
    return {
        type: CHECK_ALL_TASKS
    };
};

export const unCheckedTask = () => {
    return {
        type: UN_CHECKED_TASK
    };
};

export const filterPendentTasks = () => {
    return {
        type: FILTER_PENDENT_TASKS
    };
};

export const filterCompleteTasks = () => {
    return {
        type: FILTER_COMPLETE_TASKS
    };
};