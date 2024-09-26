import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, PasswordInput, Button, Alert } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconAlertCircle } from '@tabler/icons';
import { changePassword, profileState } from 'services/features/ProfileSlice';
import { showNotification } from '@mantine/notifications';
export default function ChangePasswordForm({ handlers }) {
    const dispatch = useDispatch();
    const { loading } = useSelector(profileState);
    const [showMessage, setShowMessage] = useState(false);
    const form = useForm({
        initialValues: {
            new_password: '',
            confirm_new_password: ''
        },

        validate: {
            confirm_new_password: (value, values) =>
                value !== values.new_password ? 'Passwords did not match' : null
        }
    });

    const handleSubmit = (values) => {
        dispatch(changePassword(values)).then((res) => {
            if (res.payload.info === 'Password changed successfuly.') {
                setShowMessage(true);
                form.setValues({
                    new_password: '',
                    confirm_new_password: ''
                });
                setTimeout(() => {
                    handlers.close();
                }, 1000);
            } else {
                showNotification({
                    message: res.payload.info,
                    color: 'red'
                });
            }
        });
    };

    return (
        <div>
            <form
                onSubmit={form.onSubmit((values) => {
                    handleSubmit(values);
                })}>
                <Grid>
                    {showMessage && (
                        <Grid.Col span={12}>
                            <Alert
                                icon={<IconAlertCircle size="1rem" />}
                                title=" Password reset successful!"
                                color="green"
                                radius="md"
                                withCloseButton
                            />
                        </Grid.Col>
                    )}
                    <Grid.Col span={12}>
                        <PasswordInput
                            required
                            label="Password"
                            placeholder="Password"
                            {...form.getInputProps('new_password')}
                        />
                    </Grid.Col>
                    <Grid.Col span={12}>
                        <PasswordInput
                            required
                            label="Confirm password"
                            placeholder="Confirm password"
                            {...form.getInputProps('confirm_new_password')}
                        />
                    </Grid.Col>
                    <Grid.Col span={12}>
                        <Button loading={loading} type="submit" fullWidth>
                            Submit
                        </Button>
                    </Grid.Col>
                </Grid>
            </form>
        </div>
    );
}
