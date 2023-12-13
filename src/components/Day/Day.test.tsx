import { render, screen } from '@testing-library/react-native';
import { Day } from '@components/Day';

import clearDay from '@assets/clear_day.svg';

describe("Component: Day", () => {
  it("should be render day.", () => {
    const { debug } = render(
      <Day
        data={{
          day: '18/07',
          min: '30°C',
          max: '34°C',
          icon: clearDay,
          weather: 'Céu limpo'
        }}
      />
    );

    debug();
  });
});

