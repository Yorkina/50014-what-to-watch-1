import {reducer, ActionCreator, ActionType, Operation} from './filter';


describe(`Filter reducer`, () => {
  it(`Return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      activeItem: `All Genre`,
    });
  });

  it(`Change filter in state`, () => {
    expect(reducer({
      activeItem: `All Genre`,
      films: [],
    }, {
      type: ActionType.CHANGE_GENRE,
      payload: `Drama`,
    })).toEqual({
      activeItem: `Drama`,
      films: [],
    });
  });
});

describe(`Action creator`, () => {
  it(`Change filter correctly`, () => {
    expect(ActionCreator.changeGenre(`Comedy`)).toEqual({
      type: ActionType.CHANGE_GENRE,
      payload: `Comedy`,
    });
  });
});
