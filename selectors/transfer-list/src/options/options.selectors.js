import { createSelector } from 'reselect';

export const optionsListSelector = ({ options }) => options.optionsList;

export const selectedSelector = ({ options }) => options.selected;

export const selectedOptionsSelector = createSelector(
  [optionsListSelector, selectedSelector],
  (allOptions, selectedIds) => allOptions.filter(option => selectedIds.includes(option.id))
)

export const availableOptionsSelector = createSelector(
  [optionsListSelector, selectedSelector],
  (allOptions, selectedIds) => allOptions.filter(option => !selectedIds.includes(option.id))
)
