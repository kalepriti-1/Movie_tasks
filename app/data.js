
const Onclick=()=>{
	const [count,setCount]=useState(0)
	function discresed(){
		setCount(count-=1)
	}
	function increament(){
		setCount(count+=1)
	}
	

	return(
		<div className="main">
					<div className="col_1">
						<div className="like">
							<button>
								<img src="like.png"/>
							</button>
						</div>
						<div className="count">
							<span>
								{count}
							</span>
						</div>
						<div className="like">
							<button>
								<img src="dislike.png"/>
							</button>
						</div>	
					</div>
					<div className="delete">
							<button>
								<img src="delete.png"/>
							</button>
					</div>
					
				</div>
	);	
}
export default Onclick
