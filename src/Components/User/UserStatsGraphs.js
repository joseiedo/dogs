import React from "react";
import styles from "./UserStatsGraphs.module.css";
import { VictoryPie, VictoryChart, VictoryBar } from "victory";

const UserStatsGraphs = ({ data }) => {
  const [graph, setGraph] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  // data para testes
  // data = [
  //   { title: "John", acessos: 2 },
  //   { title: "Alby", acessos: 1 },
  //   { title: "Mike", acessos: 4 },
  // ];

  React.useEffect(() => {
    const graphData = data.map((item) => {
      return {
        x: item.title,
        y: Number(item.acessos),
      };
    });

    if (data.length > 0) {
      setTotal(
        data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b)
      );

      setGraph(graphData);
    }
    console.log(data);
  }, []);

  return (
    <section className={`${styles.graph} animeLeft`}>
      {data.length > 0 ? (
        <>
          <div className={`${styles.graphItem} ${styles.total}`}>
            <p>Acessos: {total}</p>
          </div>
          <div className={styles.graphItem}>
            <VictoryPie
              data={graph}
              innerRadius={50}
              padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
              style={{
                data: {
                  fillOpacity: 0.9,
                  stroke: "#fff",
                  strokeWidth: 2,
                },
                labels: {
                  fontSize: 14,
                  fill: "#333",
                },
              }}
            />
          </div>
          <div className={styles.graphItem}>
            <VictoryChart>
              <VictoryBar alignment="start" data={graph}></VictoryBar>
            </VictoryChart>
          </div>
        </>
      ) : (
        <p>Não há fotos postadas para analisar acessos.</p>
      )}
    </section>
  );
};

export default UserStatsGraphs;
