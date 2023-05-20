import { convertPlotData } from '../utils/convertPlotData';
import plotData from './plotData';


//create tabulated data from synthetic data
const tableData = convertPlotData(plotData);

export default tableData;
