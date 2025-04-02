import { Component } from "react";
import ReactApexChart from "react-apexcharts";
import chroma from "chroma-js";
import { OccupationSeriesType } from "../home-types";
import {
  BrightOutlook,
  TopRecommendedOccupation,
  MostNeededQuality
} from "../../../types_common";
import { updatePrimaryColor } from "../../../functions_common";

import Info from "../../../components/common/info/Info";

interface State {
  options: any; // Конфигурационни опции за диаграмата
  series?: { name: string; data: (number | null)[] }[]; // По избор, серии за диаграмата
}

export class MostRecommendedOccupationsChart extends Component<
  {
    seriesData: OccupationSeriesType;
    category: string;
    handleInfoClick: () => void;
  },
  State
> {
  private observer: MutationObserver | null = null;

  constructor(props: {
    seriesData: OccupationSeriesType;
    category: string;
    handleInfoClick: () => void;
  }) {
    super(props);

    // Вземане на първоначалния цвят за темата
    const initialColor = updatePrimaryColor();

    this.state = {
      series: [],
      options: {
        chart: {
          type: "bar", // Тип на диаграмата - хоризонтален бар
          toolbar: { show: false } // Скриване на лентата с инструменти
        },
        plotOptions: { bar: { borderRadius: 4, horizontal: true } }, // Задаване на хоризонтална ориентация и радиус на колоните
        grid: { borderColor: "#f2f5f7" }, // Цвят на мрежата
        dataLabels: { enabled: false }, // Скриване на стойностите върху колоните
        xaxis: {
          title: { text: "Брой препоръчвания" }, // Заглавие на оста X
          categories: [] // Категории, които ще бъдат зададени динамично
        },
        yaxis: { title: { text: "Професия" } }, // Заглавие на оста Y
        colors: [
          chroma(initialColor).darken(0.6).hex(), // По-ярък цвят за филми
          chroma(initialColor).brighten(0.6).hex() // По-тъмен цвят за сериали
        ],
        legend: {
          show: true, // Показване на легендата
          position: "top", // Разположение на легендата
          labels: {
            colors: ["#000", "#000"] // Цвят на текстовете в легендата
          }
        }
      }
    };
  }

  static getDerivedStateFromProps(
    props: { seriesData: OccupationSeriesType; category: string },
    prevState: State
  ) {
    const occupationsData = props.seriesData;
    if (occupationsData) {
      // Подреждане на професиите по брой препоръчвания
      const sortCategory = props.category;
      const sortedData =
        sortCategory === "Occupations"
          ? props.seriesData.regularOccupations.sort(
              (a, b) =>
                (b.recommendation_count ?? 0) - (a.recommendation_count ?? 0)
            )
          : props.seriesData.relatedOccupations.sort(
              (a, b) =>
                (b.recommendation_count ?? 0) - (a.recommendation_count ?? 0)
            );

      // Актуализиране на данните и задаване на цветове
      const updatedOccupations = sortedData.map((occupation) => {
        // Type guard to check if occupation is of type TopRecommendedOccupation
        const isTopRecommendedOccupation = (
          occupation: any
        ): occupation is TopRecommendedOccupation => {
          return "bright_outlook" in occupation && "title_bg" in occupation;
        };

        // If it's a TopRecommendedOccupation, we can access bright_outlook and title_bg/title_en
        if (isTopRecommendedOccupation(occupation)) {
          const isBrightOutlook =
            occupation.bright_outlook === BrightOutlook.GrowRapidly; // Проверка за перспективност
          const color = !isBrightOutlook
            ? prevState.options.colors[0] // Цвят за професии с перспективи
            : prevState.options.colors[1]; // Цвят за останалите

          return {
            x: `${occupation.title_bg} (${occupation.title_en})`, // Заглавие (на български и английски)
            y: occupation.recommendation_count ?? 0, // Брой препоръчвания
            fillColor: color // Цвят на колоната
          };
        } else {
          // For MostNeededAbility, use `name_bg` and `name_en` instead of `title_bg` and `title_en`
          return {
            x: `${occupation.name_bg} (${occupation.name_en})`, // Заглавие (на български и английски)
            y: occupation.recommendation_count ?? 0, // Брой препоръчвания
            fillColor: prevState.options.colors[0] // Цвят за свързани професии
          };
        }
      });

      return {
        series: [
          {
            name: "Препоръчвания", // Име на серията
            data: updatedOccupations
          }
        ],
        options: {
          ...prevState.options,
          xaxis: {
            ...prevState.options.xaxis,
            categories: sortedData.map(
              (occupation) =>
                `${
                  "name_bg" in occupation
                    ? occupation.name_bg
                    : occupation.title_bg
                } (${
                  "name_en" in occupation
                    ? occupation.name_en
                    : occupation.title_en
                })`
            ) // Категории за оста X
          }
        }
      };
    }

    return null; // Няма промяна
  }

  componentDidMount() {
    this.updateColorRange();

    // Инициализиране на MutationObserver за наблюдение на промени в класа на document.documentElement
    this.observer = new MutationObserver(() => {
      this.updateColorRange();
    });

    // Наблюдение на промени в classList на главния елемент на документа (смени на темата)
    this.observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"]
    });
  }

  componentWillUnmount() {
    // Почистване на MutationObserver при премахване на компонента
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  updateColorRange() {
    const primaryHex = updatePrimaryColor(); // Вземане на актуализирания цвят на темата

    // Дефиниране на различни цветове на базата на актуализирания основен цвят
    const brightOutlook = chroma(primaryHex).darken(0.6).hex(); // По-светъл цвят за филми
    const nonBrightOutlook = chroma(primaryHex).brighten(0.6).hex(); // По-тъмен цвят за сериали

    // Актуализиране на състоянието с новите цветове
    this.setState((prevState) => ({
      options: {
        ...prevState.options,
        colors: [brightOutlook, nonBrightOutlook] // Актуализиране на цветовете за двете категории
      }
    }));
  }

  render() {
    const nonBrightOutlook = this.state.options.colors[0];
    const brightOutlook = this.state.options.colors[1];

    return (
      <div>
        <div className="flex justify-center items-center">
          <div className="flex items-center mr-4">
            <span
              className="w-3 h-3 mr-1 rounded-full inline-block"
              style={{ backgroundColor: nonBrightOutlook }}
            ></span>
            <span>Професия</span>
          </div>
          {this.props.category !== "Related" && (
            <div className="flex items-center">
              <span
                className="w-3 h-3 mr-1 rounded-full inline-block"
                style={{ backgroundColor: brightOutlook }}
              ></span>
              <span>Професия с ярко бъдеще</span>
              <div className="ml-2 relative group transition-all duration-300 ease-in-out">
                <Info
                  onClick={this.props.handleInfoClick}
                  width={15}
                  height={15}
                />
              </div>
            </div>
          )}
        </div>

        {this.state.series && this.state.series.length > 0 ? (
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="bar"
            height={320}
          />
        ) : (
          <p>No data available</p>
        )}
      </div>
    );
  }
}

interface TreemapProps {
  data: MostNeededQuality[];
  role: string;
}

interface TreemapState {
  series: any[];
  options: any;
}

export class Treemap extends Component<TreemapProps, TreemapState> {
  private observer: MutationObserver | null = null;

  constructor(props: TreemapProps) {
    super(props);

    // Начален цвят, базиран на темата
    const initialColor = updatePrimaryColor();

    // Генериране на диапазон от цветове (10 цвята), базирани на началния цвят
    const initialColorRange = chroma
      .scale([
        chroma(initialColor).darken(0.5).hex(), // По-тъмен нюанс
        chroma(initialColor).darken(1).hex() // Още по-тъмен нюанс
      ])
      .mode("lab")
      .domain([0, 100])
      .colors(10);

    this.state = {
      series: [
        {
          data: Treemap.formatData(props.data) // Форматиране на данните за начално състояние
        }
      ],
      options: {
        chart: {
          type: "treemap", // Тип на диаграмата - дървовидна структура
          toolbar: {
            show: false // Скриване на лентата с инструменти
          }
        },
        colors: initialColorRange, // Първоначален набор от цветове
        legend: {
          show: false // Скриване на легендата
        }
      }
    };
  }

  // Метод за извличане на състояние от променени пропсове
  static getDerivedStateFromProps(
    nextProps: TreemapProps,
    prevState: TreemapState
  ) {
    // Проверка дали данните или ролята са променени
    if (
      nextProps.data !== prevState.series[0].data ||
      nextProps.role !== prevState.options.title?.text?.split(" ")[1]
    ) {
      return {
        series: [
          {
            data: Treemap.formatData(nextProps.data) // Актуализиране на форматираните данни
          }
        ]
      };
    }
    return null; // Няма промяна
  }

  // Метод за форматиране на данните на база роля
  static formatData(data: MostNeededQuality[] = []) {
    if (!Array.isArray(data)) {
      console.error("Treemap.formatData received invalid data:", data);
      return [];
    }

    return data.map((item) => ({
      x: item.name_bg,
      y: item.occurrence_count || 0
    }));
  }

  // Метод за извличане на основния цвят на базата на темата
  getPrimaryColor() {
    const root = document.documentElement; // Вземане на кореновия HTML елемент
    const primaryColor = window
      .getComputedStyle(root)
      .getPropertyValue("--primary-color"); // Извличане на CSS променливата
    return primaryColor || "#9a110a"; // Връщане на стандартен червен цвят, ако няма дефиниран
  }

  // Метод за актуализиране на цветния диапазон
  updateColorRange() {
    const primaryHex = updatePrimaryColor(); // Актуализиране на основния цвят
    const newColorRange = chroma
      .scale([
        chroma(primaryHex).darken(0.5).hex(), // По-тъмни нюанси
        chroma(primaryHex).darken(1).hex()
      ])
      .mode("lab")
      .domain([0, 100])
      .colors(10);

    // Актуализиране на цветовете в състоянието
    this.setState((prevState) => ({
      options: {
        ...prevState.options,
        colors: newColorRange
      }
    }));
  }

  componentDidMount() {
    // Добавяне на наблюдател за промени в темата
    this.observer = new MutationObserver(() => {
      this.updateColorRange(); // Актуализиране на цветовете при промяна
    });

    this.observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"] // Слушане за промяна на класовете
    });
  }

  componentWillUnmount() {
    // Премахване на наблюдателя при унищожаване на компонента
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  render() {
    return (
      <ReactApexChart
        options={this.state.options} // Опции за диаграмата
        series={this.state.series} // Данни за диаграмата
        type="treemap"
        height={350}
      />
    );
  }
}
