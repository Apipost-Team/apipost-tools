export const ms2second = (time: string): number => {
  try {
    let time_temp = `${time}`;
    if (time_temp.length === 13) {
      time_temp = time_temp.substr(0, time_temp.length - 3);
    }
    return parseInt(time_temp, 10);
  } catch (error) {
    return 0;
  }
}


export default ms2second;
