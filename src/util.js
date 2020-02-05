const Datetime = {
    getCurrentTime: function(){
        const t = new Date();
        const h = t.getHours();
        const m = t.getMinutes();
        const s = t.getSeconds();

        return {
            hr: h,
            min: m,
            sec: s
        }
    }
};

export default Datetime;