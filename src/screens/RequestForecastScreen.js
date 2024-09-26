import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRequestForecast, requestState } from 'services/features/RequestSlice';
import { Table, Pagination, Button } from '@mantine/core';
import { get } from 'lodash';
import moment from 'moment';
function RequestForecastScreen() {
    const dispatch = useDispatch();
    const [activePage, setPage] = useState(1);
    const { forecast_list } = useSelector(requestState);

    useEffect(() => {
        dispatch(getRequestForecast());
    }, []);

    return (
        <div className="request">
            <div className="sec--title">Forecast Request </div>
            <div className="request__body">
                <Table>
                    <thead>
                        <tr>
                            <th>Reference Number</th>
                            <th>Request Time</th>
                            <th>Status</th>
                            <th>Uploaded Dataset</th>
                            <th>Download Result</th>
                        </tr>
                    </thead>
                    <tbody>
                        {get(forecast_list, 'results', []).map((res) => (
                            <tr key={res.reference_number}>
                                <td>{res.reference_number}</td>
                                <td>
                                    {res.request_time && moment(res.request_time).format('LLL')}
                                </td>
                                <td>{res.status}</td>
                                <td>
                                    <a href={res.dataset}>
                                        <Button variant="outline">Download</Button>
                                    </a>
                                </td>
                                <td>
                                    <a href={res.result}>
                                        <Button disabled={res.status !== 'Completed'}>
                                            Download
                                        </Button>
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <div className="pagination__cont">
                    <Pagination
                        withEdges
                        value={activePage}
                        onChange={setPage}
                        total={get(forecast_list, 'total_pages', 0)}
                        style={{
                            justifyContent: 'center'
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default RequestForecastScreen;
