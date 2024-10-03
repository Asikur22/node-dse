var React = require('react');
const BaseLayout = require('./layouts/base_layout');
import { Col, Row } from 'react-bootstrap';


function Index(props) {
    return (
		<BaseLayout title={props.title}>
			<Row>
				<Col style={{ marginTop: "15%", marginLeft: "5%" }}>
					<h3>Welcome to DSExchange</h3>
					<h1>API Platform</h1>
				</Col>
				<Col style={{ marginTop: "15%", marginLeft: "5%" }}>
					<h4>Available APIs</h4>

					<ul>
						<li>
							/company_list
							<br />
							<strong>Method:</strong> GET
							<br />
							<strong>URL:</strong> <a href="/api/company_list">/api/company_list</a>
						</li>
						<li>
							/share_price
							<br />
							<strong>Method:</strong> GET
							<br />
							<strong>URL:</strong> <a href="/api/share_price?name=SQURPHARMA">/api/share_price?name=SQURPHARMA</a>
						</li>
						<li>
							/company_details
							<br />
							<strong>Method:</strong> GET
							<br />
							<strong>URL:</strong> <a href="/api/company_details?name=SQURPHARMA">/api/company_details?name=SQURPHARMA</a>
						</li>
						<li>
							/latest_price
							<br />
							<strong>Method:</strong> GET
							<br />
							<strong>URL:</strong> <a href="/api/latest_price">/api/latest_price</a>
						</li>
						<li>
							/company_data
							<br />
							<strong>Method:</strong> GET
							<br />
							<strong>URL:</strong> <a href="/api/company_data?name=SQURPHARMA&type=price&duration=24">/api/company_data?name=SQURPHARMA&type=price&duration=24</a>
						</li>
					</ul>
				</Col>
			</Row>
		</BaseLayout>
	);
}

module.exports = Index;