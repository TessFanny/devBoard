import React from "react";

const News = (item) => {
    return (
        <div>
            <div>
                {item.title}
            </div>
            <div>
                {item.content}
            </div>
            <div>
                {item.creator}
            </div>
        </div>
    );
};

export default News;