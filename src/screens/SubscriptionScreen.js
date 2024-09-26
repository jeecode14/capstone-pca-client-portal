import React, { useEffect } from 'react';
import { useForm } from '@mantine/form';
import {
    Grid,
    FileInput,
    TextInput,
    Button,
    Select,
    LoadingOverlay,
    NumberInput
} from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { useSelector, useDispatch } from 'react-redux';
import { profileState, getProfile } from 'services/features/ProfileSlice';
import {
    getPaymentType,
    subscriptionState,
    handlePayment,
    getBanks,
    getSubscriptionType
} from 'services/features/SubscriptionSlice';
import { get } from 'lodash';
import moment from 'moment';

export default function SubscriptionScreen() {
    const { profile } = useSelector(profileState);
    const { payment_types, loading, banks, subscription_types } = useSelector(subscriptionState);
    const dispatch = useDispatch();
    const form = useForm({
        initialValues: {}
    });

    const handleSubmit = (values) => {
        const formData = new FormData();
        formData.append('payment_type', values.payment_type);
        formData.append('receipt', values.receipt);
        formData.append('amount', values.amount);
        formData.append('reference_number', values.reference_number);
        dispatch(handlePayment(formData)).then((res) => {
            if (get(res, 'payload.info')) {
                showNotification({
                    message: get(res, 'payload.info', 'Success!'),
                    color: 'green'
                });
                dispatch(getProfile());
                form.setValues({
                    payment_type: '',
                    receipt: '',
                    amount: 0,
                    reference_number: ''
                });
            } else {
                showNotification({
                    message: get(res, 'payload.info', 'Something went wrong!'),
                    color: 'red'
                });
            }
        });
    };

    useEffect(() => {
        dispatch(getPaymentType());
        dispatch(getBanks());
        dispatch(getSubscriptionType());
    }, []);

    const compareDates = (date1, date2) => {
        const timeDiff = Math.abs(date2.getTime() - date1.getTime());
        const diffInDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

        return diffInDays <= 10;
    };

    const checkDisabled = () => {
        if (get(profile, 'subscription_expiry_date')) {
            return compareDates(new Date(), new Date(get(profile, 'subscription_expiry_date')));
        } else {
            return true;
        }
    };

    return (
        <div className="subscription">
            <LoadingOverlay
                visible={loading}
                overlayBlur={2}
                loaderProps={{ size: 'lg', color: 'orange' }}
            />

            <div className="sec--subsc-detail">
                <div> Payment Status: {get(profile, 'payment_status', 'N/A')}</div>
                {get(profile, 'is_subscribed') && (
                    <div>
                        Your subscription will expire:{' '}
                        <b>
                            {get(profile, 'subscription_expiry_date') &&
                                moment(get(profile, 'subscription_expiry_date')).format('LLL')}
                        </b>
                    </div>
                )}
            </div>

            <div className="subscription-banner">
                <div className="subs-left">
                    <div className="sec--title">Subscription Details</div>
                    {subscription_types.map((item, i) => (
                        <div key={i} className="label-item">
                            {item.name}: <span>P{item.amount_in_pesos}</span>
                        </div>
                    ))}

                    <div className="sec--title mt-50">Payment Instructions</div>
                    <div className="label">
                        Please transfer the total amount to the following bank account.
                    </div>

                    <div className="bank-details">
                        {banks.map((item, i) => (
                            <div key={i} className="bank-item">
                                <div className="bank-name">{item.name}</div>
                                <div className="label-item">
                                    Account Name: <span>{item.account_name}</span>
                                </div>
                                <div className="label-item">
                                    Account Number: <span>{item.account_number}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="subs-right">
                    <div className="sec--title">Proof of Payment</div>
                    <div className="sec--desc">
                        Use this page to send your proof of payment of your subscription funds
                        transfer. Our admin will review and process your request as soon as
                        possible. Please check your email for updates.{' '}
                    </div>
                    <div className="sec--form">
                        <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
                            <Grid grow>
                                <Grid.Col span={12}>
                                    <Select
                                        label="Payment Type"
                                        placeholder="Select payment type"
                                        data={
                                            payment_types.length
                                                ? payment_types.map((x) => x.name)
                                                : []
                                        }
                                        onChange={(e) => {
                                            console.log(e);
                                        }}
                                        {...form.getInputProps('payment_type')}
                                    />
                                </Grid.Col>
                                <Grid.Col span={12}>
                                    <NumberInput
                                        withAsterisk
                                        label="Amount"
                                        placeholder="Enter amount"
                                        {...form.getInputProps('amount')}
                                    />
                                </Grid.Col>
                                <Grid.Col span={12}>
                                    <TextInput
                                        withAsterisk
                                        label="Reference Number"
                                        placeholder="Enter reference number"
                                        {...form.getInputProps('reference_number')}
                                    />
                                </Grid.Col>
                                <Grid.Col span={12}>
                                    <FileInput
                                        withAsterisk
                                        label="Upload Receipt"
                                        placeholder="Upload receipt"
                                        accept="image/png, image/gif, image/jpeg"
                                        {...form.getInputProps('receipt')}
                                    />
                                    <span className="small">
                                        Please upload jpg, gif, png format only.
                                    </span>
                                </Grid.Col>

                                <Grid.Col>
                                    <Button
                                        disabled={!checkDisabled()}
                                        fullWidth
                                        variant="fill"
                                        color="orange"
                                        type="submit">
                                        Submit Payment
                                    </Button>
                                </Grid.Col>
                            </Grid>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
