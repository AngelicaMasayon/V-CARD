import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView, Linking } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome from expo/vector-icons package

const VCard = ({ name, occupation, email, contactNo, dob, location, profilePic, coverPhoto }) => {
  const description = "“We are all apprentices in a craft where no one ever becomes a master.” –Ernest Hemingway";
  const [appointmentDate, setAppointmentDate] = useState('');
  const [selectedHour, setSelectedHour] = useState('');
  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleDateChange = (date) => {
    setAppointmentDate(date);
  };

  const handleHourSelection = (hour) => {
    setSelectedHour(hour);
  };

  const handleSendMessage = () => {
    // Handle sending message logic here
    console.log("Sending message...");
  };

  return (
    <ScrollView contentContainerStyle={styles.card}>
      <Image source={coverPhoto} style={styles.coverPhoto} />
      <View style={styles.profileContainer}>
        <Image source={profilePic} style={styles.profilePic} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.occupation}>{occupation}</Text>
        </View>
      </View>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.detailsContainer}>
        <View style={styles.detailItem}>
          <FontAwesome name="envelope" size={20} style={styles.detailIcon} />
          <Text>{email}</Text>
        </View>
        <View style={styles.detailItem}>
          <FontAwesome name="phone" size={20} style={styles.detailIcon} />
          <Text>{contactNo}</Text>
        </View>
        <View style={styles.detailItem}>
          <FontAwesome name="birthday-cake" size={20} style={styles.detailIcon} />
          <Text>{dob}</Text>
        </View>
        <View style={styles.detailItem}>
          <FontAwesome name="home" size={20} style={styles.detailIcon} />
          <Text>{location}</Text>
        </View>
      </View>
      <View style={styles.socialContainer}>
        <TouchableOpacity onPress={() => { Linking.openURL('https://www.facebook.com/angelica.c.masayon') }}>
          <FontAwesome name="facebook" size={30} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { Linking.openURL('https://www.instagram.com/angelicacai/') }}>
          <FontAwesome name="instagram" size={30} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { Linking.openURL('https://github.com/AngelicaMasayon') }}>
          <FontAwesome name="github" size={30} style={styles.socialIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.appointmentContainer}>
        <Text style={styles.appointmentText}>Make an Appointment</Text>
        <View style={styles.appointmentOptions}>
          <View style={styles.optionContainer}>
            <Text>Date:</Text>
            <TextInput
              style={styles.dateInput}
              placeholder="(MM-DD-YYYY)"
              value={appointmentDate}
              onChangeText={handleDateChange}
            />
          </View>
          <View style={styles.optionContainer}>
            <Text>Hours:</Text>
            <View style={styles.hourOptionsContainer}>
              <TouchableOpacity
                style={[styles.hourOption, selectedHour === '9am-12pm' && styles.selectedHour]}
                onPress={() => handleHourSelection('9am-12pm')}
              >
                <Text>9:00 am - 12:00 pm</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.hourOption, selectedHour === '2pm-5pm' && styles.selectedHour]}
                onPress={() => handleHourSelection('2pm-5pm')}
              >
                <Text>2:00 pm - 5:00 pm</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={styles.submitButton} onPress={handleSendMessage}>
            <Text style={styles.submitButtonText}>Make an Appointment</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.servicesContainer}>
        <Text style={styles.servicesTitle}>Our Services</Text>
        <View style={styles.serviceItem}>
          <FontAwesome name="edit" size={30} style={styles.serviceIcon} />
          <View>
            <Text style={styles.serviceName}>Photo & Video Editing</Text>
            <Text style={styles.serviceDescription}>We and our Team can edit Photos and Video</Text>
          </View>
        </View>
        <View style={styles.serviceItem}>
          <FontAwesome name="gears" size={30} style={styles.serviceIcon} />
          <View>
            <Text style={styles.serviceName}>Technical Support</Text>
            <Text style={styles.serviceDescription}>We and our Team can maintain & repair IT systems</Text>
          </View>
        </View>
        <View style={styles.serviceItem}>
          <FontAwesome name="camera" size={30} style={styles.serviceIcon} />
          <View>
            <Text style={styles.serviceName}>Photography</Text>
            <Text style={styles.serviceDescription}>We and our Team capture or cover an event</Text>
          </View>
        </View>
      </View>
      <View style={styles.galleryContainer}>
        <Text style={styles.galleryTitle}>Gallery</Text>
        <ScrollView horizontal>
          <View style={styles.imageContainer}>
          <TouchableOpacity onPress={() => { Linking.openURL('https://www.facebook.com/profile.php?id=61555399162340&mibextid=ZbWKwL') }}>
            <Image source={require('./brews.jpg')} style={styles.galleryImage} />
            </TouchableOpacity>
            <Text style={styles.imageDescription}>BrewsTea Online <br/> Ordering System</Text>
          </View>
          <View style={styles.imageContainer}>
          <TouchableOpacity onPress={() => { Linking.openURL('https://www.facebook.com/profile.php?id=61555399162340&mibextid=ZbWKwL') }}>
            <Image source={require('./joyness.jpg')} style={styles.galleryImage} />
            <Text style={styles.imageDescription}>Joyness Ordering and <br/> Customizing Furniture System</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <View style={styles.testimonialContainer}>
        <Text style={styles.testimonialTitle}>Testimonials</Text>
        <View style={styles.testimonialItem}>
        <TouchableOpacity onPress={() => { Linking.openURL('https://www.facebook.com/profile.php?id=61555399162340&mibextid=ZbWKwL') }}>
          <Image source={require('./brews.jpg')} style={styles.testimonialImage} />
          </TouchableOpacity>
          <View style={styles.testimonialContent}>
            <Text style={styles.testimonialName}>BrewsTea Manager</Text>
            <Text style={styles.testimonialText}>BrewsTea stated that using Online Ordering System has a big help to their company. it increase their order and as well as the satisfcation of the customer.</Text>
          </View>
        </View>
        <View style={styles.testimonialItem}>
        <TouchableOpacity onPress={() => { Linking.openURL('https://www.facebook.com/profile.php?id=61555399162340&mibextid=ZbWKwL') }}>
          <Image source={require('./joyness.jpg')} style={styles.testimonialImage} />
          </TouchableOpacity>
          <View style={styles.testimonialContent}>
            <Text style={styles.testimonialName}>Joyness Furniture Shop Owner</Text>
            <Text style={styles.testimonialText}>Joyness Furniture Shop Owner stated that using Online Ordering and Furniture Customizing system would be great help to their business specially to their customer.</Text>
          </View>
        </View>
      </View>
      <View style={styles.qrCodeContainer}>
        <View style={styles.qrCodeContent}>
          <Text style={styles.qrCodeTitle}>Scan My QR Code</Text>
          <Image source={require('./myQR.png')} style={styles.qrCodeImage} />
          <Text style={styles.qrCodeDownloadText} onPress={() => Linking.openURL('https://example.com/qr-code')}></Text>
        </View>
      </View>
      <View style={styles.businessHoursContainer}>
        <Text style={styles.businessHoursTitle}>Business Hours</Text>
        <View style={styles.businessHoursContent}>
          <View style={styles.businessHoursColumn}>
            <Text style={styles.businessHoursDay}>Mon-Fri</Text>
            <Text style={styles.businessHoursTime}>9:00 am - 6:00 pm</Text>
          </View>
          <View style={styles.businessHoursColumn}>
            <Text style={styles.businessHoursDay}>Sat-Sun</Text>
            <Text style={styles.businessHoursTime}>Closed</Text>
          </View>
        </View>
      </View>
      <View style={styles.contactUsContainer}>
        <Text style={styles.contactUsTitle}>Contact Us</Text>
        <View style={styles.contactUsForm}>
          <TextInput
            style={styles.contactUsInput}
            placeholder="Full Name"
            value={fullName}
            onChangeText={setFullName}
          />
          <TextInput
            style={styles.contactUsInput}
            placeholder="Email Address"
            value={emailAddress}
            onChangeText={setEmailAddress}
          />
          <TextInput
            style={styles.contactUsInput}
            placeholder="Contact Number"
            value={contactNumber}
            onChangeText={setContactNumber}
          />
          <TextInput
            style={[styles.contactUsInput, styles.messageInput]}
            placeholder="Message"
            multiline
            value={message}
            onChangeText={setMessage}
          />
          <TouchableOpacity style={styles.sendMessageButton} onPress={handleSendMessage}>
            <Text style={styles.sendMessageButtonText}>Send Message</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5', // Background color for the entire card
  },
  coverPhoto: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -50,
    backgroundColor: '#fff', // Background color for the profile container
    padding: 10,
    borderRadius: 10,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: 'white',
  },
  textContainer: {
    marginLeft: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  occupation: {
    fontSize: 16,
    color: 'gray',
  },
  description: {
    marginVertical: 20,
    fontSize: 16,
    textAlign: 'center',
  },
  detailsContainer: {
    marginBottom: 20,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  detailIcon: {
    marginRight: 10,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  socialIcon: {
    marginHorizontal: 10,
    color: '#333',
  },
  appointmentContainer: {
    marginBottom: 20,
    backgroundColor: '#e0f7fa', // Background color for the appointment container
    padding: 10,
    borderRadius: 10,
  },
  appointmentText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  appointmentOptions: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  dateInput: {
    marginLeft: 10,
    padding: 5,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    flex: 1,
  },
  hourOptionsContainer: {
    flexDirection: 'row',
  },
  hourOption: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  selectedHour: {
    backgroundColor: '#f0f0f0',
  },
  submitButton: {
    backgroundColor: '#4caf50',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
  },
  servicesContainer: {
    marginBottom: 20,
  },
  servicesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  serviceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  serviceIcon: {
    marginRight: 10,
    color: '#333',
  },
  serviceName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  serviceDescription: {
    fontSize: 14,
    color: 'gray',
  },
  galleryContainer: {
    marginBottom: 20,
    
  },
  galleryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  imageContainer: {
    marginRight: 10,
  },
  galleryImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginRight: 30,
    marginLeft: 30,
  },
  imageDescription: {
    textAlign: 'center',
    marginTop: 5,
  },
  testimonialContainer: {
    marginBottom: 20,
  },
  testimonialTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  testimonialItem: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  testimonialImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  testimonialContent: {
    flex: 1,
  },
  testimonialName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  testimonialText: {
    fontSize: 14,
    color: 'gray',
  },
  qrCodeContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  qrCodeContent: {
    alignItems: 'center',
  },
  qrCodeTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  qrCodeImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  qrCodeDownloadText: {
    color: '#4caf50',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  businessHoursContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  businessHoursTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  businessHoursContent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  businessHoursColumn: {
    alignItems: 'center',
  },
  businessHoursDay: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  businessHoursTime: {
    fontSize: 14,
    color: 'gray',
  },
  contactUsContainer: {
    marginBottom: 20,
  },
  contactUsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  contactUsForm: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#f9f9f9', // Background color for the contact us form
  },
  contactUsInput: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 5,
    marginBottom: 10,
  },
  messageInput: {
    height: 100,
  },
  sendMessageButton: {
    backgroundColor: '#4caf50',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  sendMessageButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default VCard;
