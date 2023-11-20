import React, { useState } from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import axios from "axios";

import "./App.css";

const queryClient = new QueryClient();

function CurrentTime(props) {
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: [props.api],
    queryFn: () => axios.get(`${props.api}`).then((res) => res.data),
  });

  if (isLoading) return `Loading ${props.api}... `;

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="App">
      <p>---</p>
      <p>API: {data.api}</p>
      <p>Time from DB: {data.now}</p>
      <div>{isFetching ? "Updating..." : ""}</div>
    </div>
  );
}

export function App() {
  // List of available software
  const softwareList = [
    "abyss/1.0",
    "abyss/2.1.5",
    "abyss/2.1.5-maxk192",
    // ... (your previous software items)
    "k-SLAM/2018-11-15",
    "k-SLAM/2018-11-18",
    "lammps/17Nov2016",
    "legacy/2018-05-18",
    "leptonica/1.78.0",
    "libra/2019-07-07",
    "librs/3.1.0",
    "libxc/4.2.3",
    "lmp_rbc/2019-03-29",
    "lunzip/1.9",
    "M2/2-1.11",
    "matlab/R2018a",
    "mcr/v91",
    "miniconda2/2.7",
    "miniconda3/3.7",
    "molcas/18.09",
    "molcas/18.09-2",
    "mongo/4.0.2",
    "mono/5.18.0.240",
    "mopac/2016",
    "mpfr/4.0.1",
    "namd/2.12_vmd",
    "namd/2.13b2-cuda",
    "nbo/6.0",
    "nwchem/6.8",
    "openbabel/2.4.1",
    "openblas/0.2.20",
    "openblas/0.3.5",
    "openblas/0.3.6",
    "opencv/3.1.0",
    "opencv/3.4.3",
    "opencv/3.4.3-contrib",
    "OpenFOAM/6",
    "openmpi/2.0.4",
    "openmpi/2.1.3",
    "openmpi/3.0.2",
    "openmpi/3.1.1",
    "openmpi/3.1.2",
    "opensees/3.0.2",
    "oracle_java/jdk1.8.0_181",
    "orca/4.0.1",
    "ovito/2.9.0",
    "ovito/3.0.0-dev234",
    // Additional software items
    "primesieve/5.7.3",
    "primesieve/7.3",
    "protobuf/3.6.1",
    "pymol/2.2.0",
    "python/2.7.15",
    "python/3.6.6",
    "python/3.7.0",
    "python/3.7.1",
    "python/3.7.3-base",
    "pyxaid2/2019-07-07",
    "q-e/6.2.0-gcc4",
    "q-e/6.2.0-gcc7",
    "q-e/6.3.0-gcc4",
    "qhull/2015.2",
    "R/3.5.1",
    "R/3.5.3",
    "R/3.6.1",
    "rclone/1.43.1",
    "root/6.14",
    "ruby/2.5.3",
    "sage/8.4",
    "sage/8.6",
    "salmon/0.12.0",
    "sapt/2016.1",
    "sapt/2016.1a",
    "sapt/2016.1-mt",
    "sas/9.4",
    "schrodinger/2018-2",
    "schrodinger/2018-2b",
    "schrodinger/2019-1",
    "scirun/4.7",
    "/shared/centos7/modulefiles",
    "simVascular/1.0",
    "simVascular/2018.07.04",
    "singularity/2.5.2",
    "singularity/2.6.0",
    "sketchmap/0.2",
    "slim/3.2",
    "slim/3.2.1",
    "slim/3.3",
    "spark/2.3.2-hadoop2.7",
    "sparsehash/2.0.3",
    "sratoolkit/2.9.2",
    "starccm+/13.06.012",
    "stata/14",
    "stata/15",
    "stata/15-mp",
    "terachem/1.94b",
    "tesseract/4.0.0",
    "Trinity/2.8.4",
    "VTK/8.1.2",
  ];

  const columnVisibilityDefault = [
    true, // Software from A to E
    true, // Software from F to J
    true, // Software from K to O
    true, // Software from P to V
  ];

  const [columnVisibility, setColumnVisibility] = useState(
    columnVisibilityDefault
  );

  const toggleColumnVisibility = (index) => {
    const updatedVisibility = [...columnVisibility];
    updatedVisibility[index] = !updatedVisibility[index];
    setColumnVisibility(updatedVisibility);
  };

  const columns = [
    softwareList.slice(0, 24), // Software from A to E
    softwareList.slice(24, 46), // Software from F to J
    softwareList.slice(46, 56), // Software from K to O
    softwareList.slice(56), // Software from P to V
  ];

  return (
    <QueryClientProvider client={queryClient}>
      <header>
        <h1>Research Computing 💻 </h1>
        <h1> at Northeastern University </h1>
        <p>
          Connecting the research community at Northeastern University with
          high-performance computing solutions.
        </p>
        <p>
          Click <a href="https://rc.northeastern.edu/">here</a> to visit
          Discovery.
        </p>
        <p>
          As a researcher at Northeastern University, you can take advantage of
          the comprehensive research computing offerings and services available
          to you—including access to centralized high-performance computing
          (HPC) clusters, storage, visualization, software, high-level technical
          and scientific consultations, documentation, and training. Discovery
          has a number of software applications that are free for you to use.
          You can find and load the currently available software on Discovery
          below.
        </p>
      </header>
      <div className="columns">
        {columns.map((column, index) => (
          <div
            key={index}
            className={`column ${
              columnVisibility[index] ? "visible" : "hidden"
            }`}
          >
            <button onClick={() => toggleColumnVisibility(index)}>{`software ${
              index + 1
            }`}</button>
            <ul>
              {column.map((software, subIndex) => (
                <li key={subIndex}>{software}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <CurrentTime api="/api/golang/" />
      <CurrentTime api="/api/node/" />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
