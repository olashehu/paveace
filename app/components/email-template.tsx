import { Html, Body, Text } from "@react-email/components";

export default function EmailTemplate({
  name,
  email,
  message,
  phone,
  service
}: {
  name: string;
  email: string;
  message: string;
  phone: number;
  service?: string;
}) {
  return (
    <Html>
      <Body className="bg-white p-4 font-family: Arial, sans-serif;> max-w-sm mx-auto">
        <Text>
          <strong>Name:</strong> {name}
        </Text>
        <Text>
          <strong>Email:</strong> {email}
        </Text>
        <Text>
          <strong>Phone number:</strong> {phone}
        </Text>
        <Text>
          <strong>Services:</strong> {service}
        </Text>
        <Text>{message}</Text>
      </Body>
    </Html>
  );
}
