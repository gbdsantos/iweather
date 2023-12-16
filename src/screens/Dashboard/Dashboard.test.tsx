import { render, screen, waitFor, waitForElementToBeRemoved } from "@__tests__/utils/customRender";
import { Dashboard } from "@screens/Dashboard";
import { api } from "@services/api";
import { mockWeatherAPIResponse } from "@__tests__/mocks/api/mockWeatherAPIResponse";
import { saveStorageCity } from "@libs/asyncStorage/cityStorage";
import { mockCityAPIResponse } from "@__tests__/mocks/api/mockCityAPIResponse";

describe("Screen: Dashboard", () => {
  it("should be show city weather.", async () => {
    jest.spyOn(api, 'get').mockResolvedValue({ data: mockWeatherAPIResponse });

    const city = {
      id: '1',
      name: 'Rio do Sul',
      latitude: 123,
      longitude: 456
    }

    await saveStorageCity(city);

    render(<Dashboard />);

    const cityName = await waitFor(() => screen.findByText(/rio do sul/i));

    expect(cityName).toBeTruthy();
  });

  it("should be another selected weather city.", async () => {
    const city = {
      id: '1',
      name: 'Rio do Sul',
      latitude: 123,
      longitude: 456
    }

    await saveStorageCity(city);

    /** 
    * 1 - Search for weather/climate information in the selected city..
    * 2 - Search for city information.
    * 3 - Searches for weather/climate information for the new selected city.
    **/
    jest.spyOn(api, 'get')
      .mockRejectedValueOnce({ data: mockWeatherAPIResponse })
      .mockRejectedValueOnce({ data: mockCityAPIResponse })
      .mockRejectedValueOnce({ data: mockWeatherAPIResponse })

    render(<Dashboard />);

    await waitForElementToBeRemoved(() => screen.queryByTestId("loading"));

  });
}); 