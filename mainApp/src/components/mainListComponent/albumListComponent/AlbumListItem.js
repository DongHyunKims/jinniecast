/**
 * Created by donghyunkim on 2017. 5. 2..
 */
import React,{Component} from "react"

class AlbumListItem extends Component{
    constructor(props){
        super(props);
    }


    render(){
        let { data } = this.props;
        //console.log(this.props.data)
        return(
            <li>
                <p>

                </p>
                <div className="albumItemCont">
                    content
                </div>
            </li>
        )
    }
}



export default AlbumListItem;


/*

 <li>
 <p className="thum"><img src={data.thumbUrl}/></p>
 <div className="itemCont">
 <p className="title">{data.title}</p>
 <p className="info">
 <span className="duration">{data.duration}</span>
 <span className="date">{data.publishedAt}</span>
 <span className="viewCount">{data.viewCount} Views</span>
 </p>
 <button className="addBtn" onClick={this.props.clickAddButton.bind(this, this.props.index)}>Add</button>
 </div>
 </li>
 */