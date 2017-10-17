/*
Copyright (C) 2013-2017 Bryan Hughes <bryan@nebri.us>

Aquarium Control is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Aquarium Control is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Aquarium Control.  If not, see <http://www.gnu.org/licenses/>.
*/

import { Reducer } from 'redux';
import { ACTIONS, IAction, IStateUpdateSucceededAction } from '../actions/actions';
import { IAquariumState } from '../util/IAppState';

export const aquariumStateReducer: Reducer<IAquariumState> = (state: IAquariumState, action: IAction) => {
  switch (action.type) {
    case ACTIONS.STATE_UPDATE_FAILED:
      return {
        state: undefined,
        currentStateValid: false
      };
    case ACTIONS.STATE_UPDATE_SUCCEEDED:
      const aquariumState = (action as IStateUpdateSucceededAction).aquariumState;
      return ({
        state: aquariumState,
        currentStateValid: true
      } as IAquariumState);
    default:
      return state || {
        state: undefined,
        currentStateValid: false
      };
  }
};
