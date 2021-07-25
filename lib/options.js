const sesAttr = {
    // Email addresses will be added to the verified list and will be sent a confirmation email
    emailList: [
        'testuser@mydomain.com',
    ],
    // Email addresses to subscribe to SNS topic for delivery notifications
    notifList: [
        'adminuser@mydomain.com',
    ],
    // Notify on delivery status inc Send, Delivery, Open
    sendDeliveryNotifications: true,
};

const domainAttr = {
    // zoneName for the email domain is required. hostedZoneId for a Route53 domain is optional.
    zoneName: 'mydomain.com',
    hostedZoneId: '',
};

module.exports = { sesAttr, domainAttr };
