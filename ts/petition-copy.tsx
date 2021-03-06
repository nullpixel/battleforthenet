import * as React from 'react';

import {daysUntil} from './utils';


interface Props {
	deadline: Date
	etsy: boolean | false
}


interface State {
}


export class PetitionCopy extends React.Component<Props, State> {
	render() {
		const daysLeft = daysUntil(this.props.deadline);
		const dayLabel = (daysLeft > 1) ? "days" : "day";
		const etsy = this.props.etsy;
		return (
			<div className="petition-copy">
				<p>
					{ etsy
						? `FCC Chairman Pai wants to repeal existing net neutrality rules that allow Etsy sellers to turn their creative passion into a business. Without these protections, Etsy sellers will be forced to choose between paying for priority access or losing sales in the internet slow lane.`
						: <span>Comcast, Verizon and AT&T want to end net neutrality so they can charge extra fees & control what we see & do online.
							On <a href="/july12/">July 12</a>, we organized over <a href="https://www.fightforthefuture.org/news/2017-07-13-update-historic-day-of-action-for-net-neutrality/">2,000,000 comments</a> to stop them.
						  This is a battle for the Internet's future.</span>
					}
					{" "}
					<em>
						{ etsy
				  		? "Send a message to the FCC and Congress urging them to protect net neutrality and microbusinesses. "
							: "If you haven't yet, send a letter to the FCC & Congress now!"
						}
					</em>
				</p>
			</div>
		);
	}
}
