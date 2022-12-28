import React, { useState, useEffect } from 'react';

import SimilarExercise from './SimilarExercise';

import { Box } from '@mui/material';

import { fetchData } from '../utils/fetchData';

const Similar = ({ info }) => {
  const { target, equipment, id } = info;

  const dataCount = 18;

  const [targetData, setTargetData] = useState([]);
  const [equipmentData, setEquipmentData] = useState([]);

  useEffect(() => {
    fetchData(`exercises/target/${target.toLowerCase()}`).then((data) =>
      setTargetData(data.slice(0, dataCount))
    );
    fetchData(`exercises/equipment/${equipment.toLowerCase()}`).then((data) =>
      setEquipmentData(data.slice(0, dataCount))
    );
  }, [target, equipment, id]);

  return (
    <Box>
      <SimilarExercise exercises={targetData} title='target muscle' />
      <SimilarExercise exercises={equipmentData} title='equipment' />
    </Box>
  );
};

export default Similar;
