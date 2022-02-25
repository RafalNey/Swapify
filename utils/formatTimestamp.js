const formattedTimestamp = (timestamp) => {
    const formattedTimestamp = new Date(timestamp.seconds*1000);
    const formatted = String(formattedTimestamp);
    return formatted;
} 

export default formattedTimestamp;